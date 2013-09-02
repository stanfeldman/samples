//
//  BarPlotViewController.m
//  scatter_plot
//
//  Created by Стас on 05.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "BarPlotViewController.h"

@implementation BarPlotViewController{
    NSMutableArray *plotData;
}

- (void) viewDidLoad {
    [super viewDidLoad];
    NSLog(@"bar plot inited");
}

-(void)generateData {
    if ( plotData == nil ) {
        plotData = [NSMutableArray new];
        for ( NSUInteger i = 0; i < 8; i++ ) {
            [plotData addObject:[NSDecimalNumber numberWithDouble:10.0 * rand() / (double)RAND_MAX + 5.0]];
        }
    }
}

- (void) addPlots {
    // Create a bar line style
    CPTMutableLineStyle *barLineStyle = [[CPTMutableLineStyle alloc] init];
    barLineStyle.lineWidth = 1.0;
    barLineStyle.lineColor = [CPTColor whiteColor];
    
    // Create bar plot
    CPTBarPlot *barPlot = [[CPTBarPlot alloc] init];
    barPlot.lineStyle         = barLineStyle;
    barPlot.barWidth          = CPTDecimalFromFloat(0.75f); // bar is 75% of the available space
    barPlot.barCornerRadius   = 4.0;
    barPlot.barsAreHorizontal = NO;
    barPlot.dataSource        = self;
    barPlot.identifier        = @"Bar Plot 1";
    
    [graph addPlot:barPlot];
}

#pragma mark Plot Data Source Methods

-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot
{
    return plotData.count;
}

-(NSArray *)numbersForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndexRange:(NSRange)indexRange
{
    NSArray *nums = nil;
    
    switch ( fieldEnum ) {
        case CPTBarPlotFieldBarLocation:
            nums = [NSMutableArray arrayWithCapacity:indexRange.length];
            for ( NSUInteger i = indexRange.location; i < NSMaxRange(indexRange); i++ ) {
                [(NSMutableArray *) nums addObject:[NSDecimalNumber numberWithUnsignedInteger:i]];
            }
            break;
            
        case CPTBarPlotFieldBarTip:
            nums = [plotData objectsAtIndexes:[NSIndexSet indexSetWithIndexesInRange:indexRange]];
            break;
            
        default:
            break;
    }
    
    return nums;
}

-(CPTFill *)barFillForBarPlot:(CPTBarPlot *)barPlot recordIndex:(NSUInteger)index
{
    CPTColor *color = nil;
    
    switch ( index ) {
        case 0:
            color = [CPTColor redColor];
            break;
            
        case 1:
            color = [CPTColor greenColor];
            break;
            
        case 2:
            color = [CPTColor blueColor];
            break;
            
        case 3:
            color = [CPTColor yellowColor];
            break;
            
        case 4:
            color = [CPTColor purpleColor];
            break;
            
        case 5:
            color = [CPTColor cyanColor];
            break;
            
        case 6:
            color = [CPTColor orangeColor];
            break;
            
        case 7:
            color = [CPTColor magentaColor];
            break;
            
        default:
            break;
    }
    
    CPTGradient *fillGradient = [CPTGradient gradientWithBeginningColor:color endingColor:[CPTColor blackColor]];
    
    return [CPTFill fillWithGradient:fillGradient];
}

-(NSString *)legendTitleForBarPlot:(CPTBarPlot *)barPlot recordIndex:(NSUInteger)index
{
    return [NSString stringWithFormat:@"Bar %lu", (unsigned long)(index + 1)];
}

@end
