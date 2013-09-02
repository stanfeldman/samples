//
//  ChatClient.m
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "ChatClient.h"

@implementation ChatClient {
    NSInputStream* inputStream;
    NSOutputStream* outputStream;
}

+ (ChatClient*) sharedInstance {
    static dispatch_once_t pred;
    static ChatClient* instance = nil;
    
    dispatch_once(&pred, ^{
        instance = [self new];
    });
    return instance;
}

- (id) init {
    self = [super init];
    if(self){
        CFReadStreamRef readStream;
        CFWriteStreamRef writeStream;
        CFStreamCreatePairWithSocketToHost(NULL, (CFStringRef)@"localhost", 6000, &readStream, &writeStream);
        inputStream = (__bridge NSInputStream*)readStream;
        outputStream = (__bridge NSOutputStream*)writeStream;
        
        inputStream.delegate = self;
        outputStream.delegate = self;
        [inputStream scheduleInRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
        [outputStream scheduleInRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
        [inputStream open];
        [outputStream open];
    }
    return self;
}

- (void) login: (NSString*)nick {
    NSString* res = [NSString stringWithFormat:@"iam:%@", nick];
    NSData* data = [[NSData alloc] initWithData:[res dataUsingEncoding:NSUTF8StringEncoding]];
    [outputStream write:data.bytes maxLength:data.length];
}

- (void) sendMessage:(NSString *)message {
    NSString* res = [NSString stringWithFormat:@"msg:%@", message];
    NSData* data = [[NSData alloc] initWithData:[res dataUsingEncoding:NSUTF8StringEncoding]];
    [outputStream write:data.bytes maxLength:data.length];
}

- (void) stream:(NSStream *)stream handleEvent:(NSStreamEvent)eventCode {
    switch (eventCode) {
        case NSStreamEventHasBytesAvailable: {
            if(stream != inputStream)
                break;
            uint8_t buffer[1024];
            int len;
            while ([inputStream hasBytesAvailable]) {
                len = [inputStream read:buffer maxLength:sizeof(buffer)];
                if(len > 0){
                    NSString* output = [[NSString alloc] initWithBytes:buffer length:len encoding:NSUTF8StringEncoding];
                    dispatch_async(dispatch_get_main_queue(), ^{
                        [[NSNotificationCenter defaultCenter] postNotificationName:@"Message" object:output];
                    });
                }
            }
            break;
        }
        case NSStreamEventEndEncountered:
            [stream close];
            [stream removeFromRunLoop:[NSRunLoop currentRunLoop] forMode:NSDefaultRunLoopMode];
            break;
        default:
            break;
    }
}

@end
