//
//  Plugin1.m
//  phonegap_plugin
//
//  Created by Стас on 02.12.12.
//
//

#import "Notifier.h"

@implementation Notifier{
    NSMutableDictionary* notifications;
}

- (CDVPlugin*) initWithWebView:(UIWebView*)theWebView
{
    self = [super initWithWebView:theWebView];
    if (self) {
        [[NSNotificationCenter defaultCenter]
            addObserver:self
         selector:@selector(didGetNotification:)
                name:@"Notifier"
                object:nil];
        notifications = [[NSMutableDictionary alloc] initWithCapacity:64];
    }
    return self;
}

- (void)didGetNotification:(NSNotification*)notification {
    NSString* nid = [notification object];
    NSString* callbackId =  [notifications valueForKey:nid];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:nid];
    NSString* javascript = [result toSuccessCallbackString:callbackId];
    [self writeJavascript:javascript];
}

-(void) show:(NSMutableArray *)arguments withDict:(NSMutableArray *)options{
    NSString* callbackId = [arguments objectAtIndex:0];
    CDVPluginResult* result = nil;
    NSString* javascript = nil;
    @try {
        NSString* nid = [arguments objectAtIndex:1];
        NSString* msg = [arguments objectAtIndex:2];
        if(msg != nil && msg.length > 0 && nid != nil && nid.length > 0){
            UILocalNotification *localNotif = [[UILocalNotification alloc] init];
            localNotif.alertBody = msg;
            NSDictionary *dict = [NSDictionary dictionaryWithObject:nid forKey:@"id"];
            localNotif.userInfo = dict;
            [[UIApplication sharedApplication] presentLocalNotificationNow:localNotif];
            [localNotif release];
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            javascript = [result toSuccessCallbackString:callbackId];
        }
        else{
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"it's a pitty, error!"];
            javascript = [result toErrorCallbackString:callbackId];
        }
    }
    @catch (NSException *exception) {
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:exception.reason];
        javascript = [result toErrorCallbackString:callbackId];
    }
    [self writeJavascript:javascript];
}

-(void) hide_all:(NSMutableArray *)arguments withDict:(NSMutableArray *)options{
    NSString* callbackId = [arguments objectAtIndex:0];
    CDVPluginResult* result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    NSString* javascript = [result toErrorCallbackString:callbackId];
    @try {
        [[UIApplication sharedApplication] cancelAllLocalNotifications];
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        javascript = [result toSuccessCallbackString:callbackId];
    }
    @catch (NSException *exception) {
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:exception.reason];
        javascript = [result toErrorCallbackString:callbackId];
    }
    [self writeJavascript:javascript];
}

-(void) on_click:(NSMutableArray *)arguments withDict:(NSMutableArray *)options{
    NSString* callbackId = [arguments objectAtIndex:0];
    @try {
        NSString* nid = [arguments objectAtIndex:1];
        if(nid != nil && nid.length > 0){
            [notifications setValue:callbackId forKey:nid];
        }
    }
    @catch (NSException *exception) {
    }
}

-(void) set_badge:(NSMutableArray *)arguments withDict:(NSMutableArray *)options{
    NSString* callbackId = [arguments objectAtIndex:0];
    CDVPluginResult* result = nil;
    NSString* javascript = nil;
    @try {
        NSString* number = [arguments objectAtIndex:1];
        if(number != nil && number.length > 0){
            [[UIApplication sharedApplication] setApplicationIconBadgeNumber:[number intValue]];
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
            javascript = [result toSuccessCallbackString:callbackId];
        }
        else{
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
            javascript = [result toErrorCallbackString:callbackId];
        }
    }
    @catch (NSException *exception) {
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_JSON_EXCEPTION messageAsString:exception.reason];
        javascript = [result toErrorCallbackString:callbackId];
    }
    [self writeJavascript:javascript];
}

@end
