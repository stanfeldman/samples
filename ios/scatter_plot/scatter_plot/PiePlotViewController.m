//
//  PiePlotViewController.m
//  scatter_plot
//
//  Created by Стас on 09.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "PiePlotViewController.h"

@implementation PiePlotViewController{
    NSMutableArray *plotData;
}

- (void) viewDidLoad {
    [super viewDidLoad];
    NSLog(@"pie plot inited");
}

-(void)generateData {
    if ( plotData == nil ) {
        plotData = [[NSMutableArray alloc] initWithObjects:
                    [NSNumber numberWithDouble:20.0],
                    [NSNumber numberWithDouble:30.0],
                    [NSNumber numberWithDouble:60.0],
                    nil];
    }
}

- (void) addPlots {
    graph.axisSet = nil;
    // Overlay gradient for pie chart
    CPTGradient *overlayGradient = [[CPTGradient alloc] init];
    overlayGradient.gradientType = CPTGradientTypeRadial;
    overlayGradient              = [overlayGradient addColorStop:[[CPTColor blackColor] colorWithAlphaComponent:0.0] atPosition:0.0];
    overlayGradient              = [overlayGradient addColorStop:[[CPTColor blackColor] colorWithAlphaComponent:0.3] atPosition:0.9];
    overlayGradient              = [overlayGradient addColorStop:[[CPTColor blackColor] colorWithAlphaComponent:0.7] atPosition:1.0];
    
    // Add pie chart
    CPTPieChart *piePlot = [[CPTPieChart alloc] init];
    piePlot.dataSource = self;
    piePlot.pieRadius  = MIN(0.7 * (graphHostingView.frame.size.height - 2 * graph.paddingLeft) / 2.0,
                             0.7 * (graphHostingView.frame.size.width - 2 * graph.paddingTop) / 2.0);
    piePlot.identifier     = @"test";
    piePlot.startAngle     = M_PI_4;
    piePlot.sliceDirection = CPTPieDirectionCounterClockwise;
    piePlot.overlayFill    = [CPTFill fillWithGradient:overlayGradient];
    
    piePlot.labelRotationRelativeToRadius = YES;
    piePlot.labelRotation                 = -M_PI_2;
    piePlot.labelOffset                   = -50.0;
    
    piePlot.delegate = self;
    [graph addPlot:piePlot];
}

-(CPTLayer *)dataLabelForPlot:(CPTPlot *)plot recordIndex:(NSUInteger)index
{
    static CPTMutableTextStyle *whiteText = nil;
    
    if ( !whiteText ) {
        whiteText       = [[CPTMutableTextStyle alloc] init];
        whiteText.color = [CPTColor whiteColor];
    }
    
    CPTTextLayer *newLayer = [[CPTTextLayer alloc] initWithText:[NSString stringWithFormat:@"%1.0f", [[plotData objectAtIndex:index] floatValue]] style:whiteText];
    return newLayer;
}

#pragma mark Plot Data Source Methods

-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot
{
    return [plotData count];
}

-(NSNumber *)numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)index
{
    NSNumber *num;
    
    if ( fieldEnum == CPTPieChartFieldSliceWidth ) {
        num = [plotData objectAtIndex:index];
    }
    else {
        return [NSNumber numberWithInt:index];
    }
    
    return num;
}

-(NSString *)legendTitleForPieChart:(CPTPieChart *)pieChart recordIndex:(NSUInteger)index
{
    return [NSString stringWithFormat:@"Pie Slice %lu", (unsigned long)index];
}

@end
