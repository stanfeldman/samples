//
//  CPDSecondViewController.m
//  CorePlotDemo
//
//  Created by Стас on 17.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import "CPDBarGraphController.h"
#import "CPDStockPriceStore.h"

@implementation CPDBarGraphController

CGFloat const CPDBarWidth = 0.25f;
CGFloat const CPDBarInitialX = 0.25f;

- (void)viewDidLoad
{
    [super viewDidLoad];
	[self initPlot];
}

- (void) initPlot{
    CGRect rect = self.view.bounds;
    self.hostView = [[CPTGraphHostingView alloc] initWithFrame:rect];
    [self.view addSubview:self.hostView];
    [self configureGraph];
    [self configurePlots];
    [self configureAxes];
}

- (void) configureGraph{
    CPTGraph* graph = [[CPTXYGraph alloc] initWithFrame:self.hostView.bounds];
    graph.plotAreaFrame.masksToBorder = NO;
    self.hostView.hostedGraph = graph;
    
    [graph applyTheme:[CPTTheme themeNamed:kCPTPlainWhiteTheme]];
    graph.paddingTop = -1.0f;
    graph.paddingRight = -5.0f;
    graph.paddingBottom = 30.0f;
    graph.paddingLeft = 30.0f;
    
    CPTMutableTextStyle* titleStyle = [CPTMutableTextStyle textStyle];
    titleStyle.color = [CPTColor whiteColor];
    titleStyle.fontName = @"Helvetica-Bold";
    titleStyle.fontSize = 16.0f;
    
    graph.title = @"bar prices";
    graph.titleTextStyle = titleStyle;
    graph.titlePlotAreaFrameAnchor = CPTRectAnchorTop;
    graph.titleDisplacement = CGPointMake(0.0f, -16.0f);
    
    float xMin = 0;
    float xMax = [[CPDStockPriceStore sharedInstance] datesInWeek].count;
    float yMin = 0;
    float yMax = 800;
    CPTXYPlotSpace* plotSpace = (CPTXYPlotSpace*)graph.defaultPlotSpace;
    plotSpace.xRange = [CPTPlotRange plotRangeWithLocation:CPTDecimalFromFloat(xMin) length:CPTDecimalFromFloat(xMax)];
    plotSpace.yRange = [CPTPlotRange plotRangeWithLocation:CPTDecimalFromFloat(yMin) length:CPTDecimalFromFloat(yMax)];
}

- (void) configurePlots{
    CPTBarPlot* plot1 = [CPTBarPlot tubularBarPlotWithColor:[CPTColor redColor] horizontalBars:NO];
    plot1.identifier = CPDTickerSymbolAAPL;
    CPTBarPlot* plot2 = [CPTBarPlot tubularBarPlotWithColor:[CPTColor greenColor] horizontalBars:NO];
    plot2.identifier = CPDTickerSymbolGOOG;
    
    CPTMutableLineStyle* lineStyle = [CPTMutableLineStyle new];
    lineStyle.lineColor = [CPTColor grayColor];
    lineStyle.lineWidth = 0.5;
    
    CPTGraph* graph = self.hostView.hostedGraph;
    float barX = CPDBarInitialX;
    NSArray* plots = [[NSArray alloc] initWithObjects:plot1, plot2, nil];
    for(CPTBarPlot* plot in plots){
        plot.dataSource = self;
        plot.delegate = self;
        plot.barWidth = CPTDecimalFromDouble(CPDBarWidth);
        plot.barOffset = CPTDecimalFromFloat(barX);
        plot.lineStyle = lineStyle;
        [graph addPlot:plot];
        barX += CPDBarWidth;
    }
}

- (void) configureAxes{
    CPTMutableTextStyle* axisTitleStyle = [CPTMutableTextStyle textStyle];
    axisTitleStyle.color = [CPTColor blackColor];
    axisTitleStyle.fontName = @"Helvetica-Bold";
    axisTitleStyle.fontSize = 12;
    CPTMutableLineStyle* axisLineStyle = [CPTMutableLineStyle lineStyle];
    axisTitleStyle.color = [[CPTColor blackColor] colorWithAlphaComponent:1];
    axisLineStyle.lineWidth = 2;
    CPTXYAxisSet* axisSet = (CPTXYAxisSet*)self.hostView.hostedGraph.axisSet;
    axisSet.xAxis.labelingPolicy = CPTAxisLabelingPolicyNone;
    axisSet.xAxis.title = @"Days of week";
    axisSet.xAxis.titleTextStyle = axisTitleStyle;
    axisSet.xAxis.axisLineStyle = axisLineStyle;
    axisSet.xAxis.titleOffset = 10.0f;
    
    axisSet.yAxis.labelingPolicy = CPTAxisLabelingPolicyNone;
    axisSet.yAxis.title = @"Price";
    axisSet.yAxis.titleTextStyle = axisTitleStyle;
    axisSet.yAxis.axisLineStyle = axisLineStyle;
    axisSet.yAxis.titleOffset = 5;
}

- (NSUInteger) numberOfRecordsForPlot:(CPTPlot *)plot{
    return [[CPDStockPriceStore sharedInstance] datesInWeek].count;
}

- (NSNumber*) numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)idx{
    CPDStockPriceStore* priceStore = [CPDStockPriceStore sharedInstance];
    if(fieldEnum == CPTBarPlotFieldBarTip && (idx < [priceStore datesInWeek].count)){
        NSString* symbol = nil;
        if([plot.identifier isEqual:CPDTickerSymbolAAPL])
            symbol = CPDTickerSymbolAAPL;
        else if([plot.identifier isEqual:CPDTickerSymbolGOOG])
            symbol = CPDTickerSymbolGOOG;
        if(symbol)
            return [[priceStore weeklyPrices:symbol] objectAtIndex:idx];
    }
    return [NSDecimalNumber numberWithUnsignedInteger:idx];
}

- (void) barPlot:(CPTBarPlot *)plot barWasSelectedAtRecordIndex:(NSUInteger)idx{
    
}

- (BOOL) shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation{
    return YES;
}

@end
