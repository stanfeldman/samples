//
//  Plugin1.m
//  phonegap_plugin
//
//  Created by Стас on 02.12.12.
//
//

#import "Plugin1.h"

@implementation Plugin1

-(void) first:(NSMutableArray *)arguments withDict:(NSMutableArray *)options{
    NSString* callbackId = [arguments objectAtIndex:0];
    CDVPluginResult* result = nil;
    NSString* javascript = nil;
    @try {
        NSString* arg1 = [arguments objectAtIndex:1];
        if(arg1 != nil && arg1.length > 0){
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:[NSString stringWithFormat:@"from plugin: %@", arg1]];
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

@end
