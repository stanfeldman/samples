//
//  TabsViewController.m
//  iphone_ipad
//
//  Created by Стас on 18.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "TabsViewController.h"
#import <EventKit/EventKit.h>

@interface TabsViewController ()

@end

@implementation TabsViewController

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    self.delegate = self;
    EKEventStore* eventStore = [EKEventStore new];
    if([eventStore respondsToSelector:@selector(requestAccessToEntityType:completion:)])
    {
        // iOS 6 and later
        // This line asks user's permission to access his calendar
        [eventStore requestAccessToEntityType:EKEntityTypeEvent completion:^(BOOL granted, NSError *error)
         {
             if (granted){
                 [self createEvent:eventStore];
             }
             else
                 NSLog(@"you need give me permission!");
         }];
    }
    else
        [self createEvent:eventStore];
}

- (void) createEvent: (EKEventStore*)eventStore {
    EKEvent *event  = [EKEvent eventWithEventStore:eventStore];
    event.title     = @"EVENT TITLE";
    event.startDate = [[NSDate alloc] init];
    event.endDate   = [[NSDate alloc] initWithTimeInterval:600 sinceDate:event.startDate];
    [event setCalendar:[eventStore defaultCalendarForNewEvents]];
    NSError *err;
    [eventStore saveEvent:event span:EKSpanThisEvent error:&err];
    if(err)
        NSLog(@"error: %@", [err userInfo]);
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (BOOL)tabBarController:(UITabBarController *)tabBarController shouldSelectViewController:(UIViewController *)viewController {
    
    NSArray *tabViewControllers = tabBarController.viewControllers;
    UIView * fromView = tabBarController.selectedViewController.view;
    UIView * toView = viewController.view;
    if (fromView == toView)
        return NO;
    NSUInteger fromIndex = [tabViewControllers indexOfObject:tabBarController.selectedViewController];
    NSUInteger toIndex = [tabViewControllers indexOfObject:viewController];
    
    [UIView transitionFromView:fromView
                        toView:toView
                      duration:0.7
                       options: toIndex > fromIndex ? UIViewAnimationOptionTransitionFlipFromRight : UIViewAnimationOptionTransitionFlipFromLeft
                    completion:^(BOOL finished) {
                        if (finished) {
                            tabBarController.selectedIndex = toIndex;
                        }
                    }];
    return true;
}

@end
