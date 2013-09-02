//
//  ChatClient.h
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface ChatClient : NSObject<NSStreamDelegate>

+ (ChatClient*) sharedInstance;
- (void) login: (NSString*)nick;
- (void) sendMessage: (NSString*)message;

@end
