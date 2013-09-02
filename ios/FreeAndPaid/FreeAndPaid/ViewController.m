//
//  ViewController.m
//  FreeAndPaid
//
//  Created by Стас on 30.04.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
#ifndef LITE_VERSION
	self.statusText.text = @"it's paid app!";
#else
    self.statusText.text = @"it's free app";
#endif
}

- (void)viewDidUnload {
    [self setStatusText:nil];
    [super viewDidUnload];
}
@end
