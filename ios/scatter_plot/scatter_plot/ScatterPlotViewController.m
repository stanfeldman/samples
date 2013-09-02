//
//  ViewController.m
//  scatter_plot
//
//  Created by Стас on 05.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "ScatterPlotViewController.h"

@implementation ScatterPlotViewController {
    NSMutableArray *plotData;
    NSMutableArray *plotData1;
    NSMutableArray *plotData2;
    NSString* kData;
    NSString* kFirst;
    NSString* kSecond;
}

- (void) viewDidLoad {
    kData   = @"Data Source Plot";
    kFirst  = @"First Derivative";
    kSecond = @"Second Derivative";
    [super viewDidLoad];
}

-(void)generateData {
    if ( plotData == nil ) {
        plotData = [NSMutableArray array];
        for ( NSUInteger i = 0; i < 11; i++ ) {
            NSNumber *x = [NSNumber numberWithDouble:1.0 + i * 0.05];
            NSNumber *y = [NSNumber numberWithDouble:1.2 * rand() / (double)RAND_MAX + 0.5];
            [plotData addObject:[NSMutableDictionary dictionaryWithObjectsAndKeys:x, @"x", y, @"y", nil]];
        }
    }
    if ( plotData1 == nil ) {
        plotData1 = [NSMutableArray array];
        for ( NSUInteger i = 1; i < plotData.count; i++ ) {
            NSDictionary *point1 = [plotData objectAtIndex:i - 1];
            NSDictionary *point2 = [plotData objectAtIndex:i];
            
            double x1   = [(NSNumber *)[point1 objectForKey:@"x"] doubleValue];
            double x2   = [(NSNumber *)[point2 objectForKey:@"x"] doubleValue];
            double dx   = x2 - x1;
            double xLoc = (x1 + x2) * 0.5;
            
            double y1 = [(NSNumber *)[point1 objectForKey:@"y"] doubleValue];
            double y2 = [(NSNumber *)[point2 objectForKey:@"y"] doubleValue];
            double dy = y2 - y1;
            
            [plotData1 addObject:[NSMutableDictionary dictionaryWithObjectsAndKeys:
                                  [NSDecimalNumber numberWithDouble:xLoc], @"x",
                                  [NSDecimalNumber numberWithDouble:(dy / dx) / 20.0], @"y", nil]];
        }
    }
    if ( plotData2 == nil ) {
        plotData2 = [NSMutableArray array];
        for ( NSUInteger i = 1; i < plotData1.count; i++ ) {
            NSDictionary *point1 = [plotData1 objectAtIndex:i - 1];
            NSDictionary *point2 = [plotData1 objectAtIndex:i];
            
            double x1   = [(NSNumber *)[point1 objectForKey:@"x"] doubleValue];
            double x2   = [(NSNumber *)[point2 objectForKey:@"x"] doubleValue];
            double dx   = x2 - x1;
            double xLoc = (x1 + x2) * 0.5;
            
            double y1 = [(NSNumber *)[point1 objectForKey:@"y"] doubleValue];
            double y2 = [(NSNumber *)[point2 objectForKey:@"y"] doubleValue];
            double dy = y2 - y1;
            
            [plotData2 addObject:[NSMutableDictionary dictionaryWithObjectsAndKeys:
                                  [NSDecimalNumber numberWithDouble:xLoc], @"x",
                                  [NSDecimalNumber numberWithDouble:(dy / dx) / 20.0], @"y", nil]];
        }
    }
}

- (void) addPlots {
    // Create a plot that uses the data source method
    [self addPlot:kData color:[CPTColor orangeColor]];
    [self addPlot:kFirst color:[CPTColor redColor]];
    [self addPlot:kSecond color:[CPTColor blueColor]];
}

- (void) addPlot:(NSString*)identifier color:(CPTColor*)color {
    // Create a plot that uses the data source method
    CPTScatterPlot *plot = [[CPTScatterPlot alloc] init];
    plot.identifier = identifier;
    // Make the data source line use curved interpolation
    plot.interpolation = CPTScatterPlotInterpolationCurved;
    CPTMutableLineStyle *lineStyle = [plot.dataLineStyle mutableCopy];
    lineStyle.lineWidth              = 3.0;
    lineStyle.lineColor              = color;
    plot.dataLineStyle = lineStyle;
    plot.dataSource = self;
    [graph addPlot:plot];
    // Add plot symbols
    CPTMutableLineStyle *symbolLineStyle = [CPTMutableLineStyle lineStyle];
    symbolLineStyle.lineColor = [[CPTColor blackColor] colorWithAlphaComponent:0.5];
    CPTPlotSymbol *plotSymbol = [CPTPlotSymbol ellipsePlotSymbol];
    plotSymbol.fill               = [CPTFill fillWithColor:[color colorWithAlphaComponent:0.5]];
    plotSymbol.lineStyle          = symbolLineStyle;
    plotSymbol.size               = CGSizeMake(10.0, 10.0);
    plot.plotSymbol = plotSymbol;
    // Set plot delegate, to know when symbols have been touched
    // We will display an annotation when a symbol is touched
    plot.delegate = self;
    plot.plotSymbolMarginForHitDetection = 5.0f;
}

#pragma mark Plot Data Source Methods

-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot
{
    NSUInteger numRecords = 0;
    NSString *identifier  = (NSString *)plot.identifier;
    
    if ( [identifier isEqualToString:kData] ) {
        numRecords = plotData.count;
    }
    else if ( [identifier isEqualToString:kFirst] ) {
        numRecords = plotData1.count;
    }
    else if ( [identifier isEqualToString:kSecond] ) {
        numRecords = plotData2.count;
    }
    
    return numRecords;
}

-(NSNumber *)numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)index
{
    NSNumber *num        = nil;
    NSString *identifier = (NSString *)plot.identifier;
    
    if ( [identifier isEqualToString:kData] ) {
        num = [[plotData objectAtIndex:index] valueForKey:(fieldEnum == CPTScatterPlotFieldX ? @"x":@"y")];
    }
    else if ( [identifier isEqualToString:kFirst] ) {
        num = [[plotData1 objectAtIndex:index] valueForKey:(fieldEnum == CPTScatterPlotFieldX ? @"x":@"y")];
    }
    else if ( [identifier isEqualToString:kSecond] ) {
        num = [[plotData2 objectAtIndex:index] valueForKey:(fieldEnum == CPTScatterPlotFieldX ? @"x":@"y")];
    }
    
    return num;
}

#pragma mark -
#pragma mark CPTScatterPlot delegate method

-(void)scatterPlot:(CPTScatterPlot *)plot plotSymbolWasSelectedAtRecordIndex:(NSUInteger)index
{
    if ( symbolTextAnnotation ) {
        [graph.plotAreaFrame.plotArea removeAnnotation:symbolTextAnnotation];
        symbolTextAnnotation = nil;
    }
    
    // Setup a style for the annotation
    CPTMutableTextStyle *hitAnnotationTextStyle = [CPTMutableTextStyle textStyle];
    hitAnnotationTextStyle.color    = [CPTColor whiteColor];
    hitAnnotationTextStyle.fontSize = 16.0f;
    hitAnnotationTextStyle.fontName = @"Helvetica-Bold";
    
    // Determine point of symbol in plot coordinates
    NSArray* data;
    if([plot.identifier isEqual:kData])
        data = plotData;
    else if([plot.identifier isEqual:kFirst])
        data = plotData1;
    else
        data = plotData2;
    NSNumber *x          = [[data objectAtIndex:index] valueForKey:@"x"];
    NSNumber *y          = [[data objectAtIndex:index] valueForKey:@"y"];
    NSArray *anchorPoint = [NSArray arrayWithObjects:x, y, nil];
    
    // Add annotation
    // First make a string for the y value
    NSNumberFormatter *formatter = [[NSNumberFormatter alloc] init];
    [formatter setMaximumFractionDigits:2];
    NSString *yString = [formatter stringFromNumber:y];
    
    // Now add the annotation to the plot area
    CPTTextLayer *textLayer = [[CPTTextLayer alloc] initWithText:yString style:hitAnnotationTextStyle];
    symbolTextAnnotation              = [[CPTPlotSpaceAnnotation alloc] initWithPlotSpace:graph.defaultPlotSpace anchorPlotPoint:anchorPoint];
    symbolTextAnnotation.contentLayer = textLayer;
    symbolTextAnnotation.displacement = CGPointMake(0.0f, 20.0f);
    [graph.plotAreaFrame.plotArea addAnnotation:symbolTextAnnotation];
}

@end
