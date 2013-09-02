//
//  CPDScatterPlotViewController.m
//  CorePlotDemo
//
//  Created by Стас on 17.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import "CPDScatterPlotViewController.h"

@implementation CPDScatterPlotViewController

@synthesize hostView;

- (void)viewDidLoad
{
    [super viewDidLoad];
	[self initPlot];
}

#pragma mark - Chart behavior
-(void)initPlot {
    [self configureHost];
    [self configureGraph];
    [self configurePlots];
    [self configureAxes];
}

-(void)configureHost {
}

-(void)configureGraph {
}

-(void)configurePlots {
}

-(void)configureAxes {
}

#pragma mark - CPTPlotDataSource methods
-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot {
    return 0;
}

-(NSNumber *)numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)index {
    return [NSDecimalNumber zero];
}

- (BOOL) shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation{
    return YES;
}

@end
