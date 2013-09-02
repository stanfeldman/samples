//
//  Plugin1.h
//  phonegap_plugin
//
//  Created by Стас on 02.12.12.
//
//

#import <Cordova/CDVPlugin.h>

@interface Notifier : CDVPlugin

-(void) show:(NSMutableArray*)arguments withDict:(NSMutableArray*)options;
-(void) hide_all:(NSMutableArray *)arguments withDict:(NSMutableArray *)options;
- (void)didGetNotification:(NSNotification*)notification;
-(void) on_click:(NSMutableArray *)arguments withDict:(NSMutableArray *)options;
-(void) set_badge:(NSMutableArray *)arguments withDict:(NSMutableArray *)options;

@end
