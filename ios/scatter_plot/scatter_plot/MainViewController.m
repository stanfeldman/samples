//
//  MainViewController.m
//  scatter_plot
//
//  Created by Стас on 05.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "MainViewController.h"
#import "ScatterPlotViewController.h"
#import "BarPlotViewController.h"
#import "PiePlotViewController.h"

@implementation MainViewController {
    UISegmentedControl* segmentedControl;
    UIViewController* scatterVC;
    UIViewController* barVC;
    UIViewController* pieVC;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
	[self addSegmentedControl];
}

- (void) viewDidAppear:(BOOL)animated {
    [self selectSegment:0];
}

- (void) addSegmentedControl {
    NSArray *buttonNames = [NSArray arrayWithObjects:
                            @"Scatter", @"Bar", @"Pie", nil];
    segmentedControl = [[UISegmentedControl alloc] initWithItems:buttonNames];
    segmentedControl.segmentedControlStyle = UISegmentedControlStyleBar;
    [segmentedControl addTarget:self action:@selector(segmentAction:) forControlEvents:UIControlEventValueChanged];
    segmentedControl.selectedSegmentIndex = 0;
    self.navigationItem.titleView = segmentedControl;
}

-(void) segmentAction: (UISegmentedControl *) segmentedC {
    NSInteger selected = segmentedC.selectedSegmentIndex;
    [self selectSegment:selected];
}

- (void) selectSegment: (NSInteger) index {
    NSLog(@"segment: %i", index);
    [self.view.subviews makeObjectsPerformSelector:@selector(removeFromSuperview)];
    UIView* view;
    if(index == 0){
        if(!scatterVC)
            scatterVC = [ScatterPlotViewController new];
        view = scatterVC.view;
    }
    else if(index == 1){
        if(!barVC)
            barVC = [BarPlotViewController new];
        view = barVC.view;
    }
    else{
        if(!pieVC)
            pieVC = [PiePlotViewController new];
        view = pieVC.view;
    }
    if(view){
        [view setFrame:self.view.frame];
        [self.view addSubview:view];
    }
}

@end
