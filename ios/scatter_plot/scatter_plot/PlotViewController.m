//
//  ViewController.m
//  scatter_plot
//
//  Created by Стас on 05.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "PlotViewController.h"

@implementation PlotViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	[self generateData];
    graphHostingView = [CPTGraphHostingView new];
	[self.view addSubview:graphHostingView];
    [self renderPlots];
}

- (void) viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
    graphHostingView.frame = self.view.bounds;
}

-(void)generateData {
    mustOverride();
}

#pragma mark configure graph view
-(void)renderPlots {
    CGRect bounds = graphHostingView.bounds;
    
    graph = [[CPTXYGraph alloc] initWithFrame:bounds];
    graphHostingView.hostedGraph = graph;
    [graph applyTheme:[CPTTheme themeNamed:kCPTDarkGradientTheme]];
    
    [self setPaddingDefaultsForGraph:bounds];
    
    // Setup scatter plot space
    CPTXYPlotSpace *plotSpace = (CPTXYPlotSpace *)graph.defaultPlotSpace;
    plotSpace.allowsUserInteraction = YES;
    plotSpace.delegate = self;
    
    // Grid line styles
    CPTMutableLineStyle *majorGridLineStyle = [CPTMutableLineStyle lineStyle];
    majorGridLineStyle.lineWidth = 0.75;
    majorGridLineStyle.lineColor = [[CPTColor colorWithGenericGray:0.2] colorWithAlphaComponent:0.75];
    
    CPTMutableLineStyle *minorGridLineStyle = [CPTMutableLineStyle lineStyle];
    minorGridLineStyle.lineWidth = 0.25;
    minorGridLineStyle.lineColor = [[CPTColor whiteColor] colorWithAlphaComponent:0.1];
    
    CPTLineCap *lineCap = [CPTLineCap sweptArrowPlotLineCap];
    lineCap.size = CGSizeMake(15.0, 15.0);
    
    // Axes
    // Label x axis with a fixed interval policy
    CPTXYAxisSet *axisSet = (CPTXYAxisSet *)graph.axisSet;
    CPTXYAxis *x          = axisSet.xAxis;
    x.labelingPolicy = CPTAxisLabelingPolicyAutomatic;
    x.majorIntervalLength   = CPTDecimalFromDouble(0.1);
    x.minorTicksPerInterval = 4;
    x.majorGridLineStyle    = majorGridLineStyle;
    x.minorGridLineStyle    = minorGridLineStyle;
    x.axisConstraints       = [CPTConstraints constraintWithRelativeOffset:0.0];
    
    lineCap.lineStyle = x.axisLineStyle;
    lineCap.fill      = [CPTFill fillWithColor:lineCap.lineStyle.lineColor];
    x.axisLineCapMax  = lineCap;
    
    x.title       = @"X Axis";
    x.titleOffset = 30.0;
    
    // Label y with an automatic label policy.
    CPTXYAxis *y = axisSet.yAxis;
    y.labelingPolicy              = CPTAxisLabelingPolicyAutomatic;
    y.minorTicksPerInterval       = 4;
    y.preferredNumberOfMajorTicks = 8;
    y.majorGridLineStyle          = majorGridLineStyle;
    y.minorGridLineStyle          = minorGridLineStyle;
    y.axisConstraints             = [CPTConstraints constraintWithRelativeOffset:0.0];
    y.labelOffset                 = 10.0;
    
    lineCap.lineStyle = y.axisLineStyle;
    lineCap.fill      = [CPTFill fillWithColor:lineCap.lineStyle.lineColor];
    y.axisLineCapMax  = lineCap;
    y.axisLineCapMin  = lineCap;
    
    y.title       = @"Y Axis";
    y.titleOffset = 32.0;
    
    // Set axes
    graph.axisSet.axes = [NSArray arrayWithObjects:x, y, nil];
    
    [self addPlots];
    
    // Auto scale the plot space to fit the plot data
    [plotSpace scaleToFitPlots:[graph allPlots]];
//    CPTMutablePlotRange *xRange = [plotSpace.xRange mutableCopy];
//    CPTMutablePlotRange *yRange = [plotSpace.yRange mutableCopy];
//    
//    // Expand the ranges to put some space around the plot
//    [xRange expandRangeByFactor:CPTDecimalFromDouble(1.2)];
//    [yRange expandRangeByFactor:CPTDecimalFromDouble(1.2)];
//    plotSpace.xRange = xRange;
//    plotSpace.yRange = yRange;
//    
//    [xRange expandRangeByFactor:CPTDecimalFromDouble(1.025)];
//    xRange.location = plotSpace.xRange.location;
//    [yRange expandRangeByFactor:CPTDecimalFromDouble(1.05)];
//    x.visibleAxisRange = xRange;
//    y.visibleAxisRange = yRange;
//    
//    [xRange expandRangeByFactor:CPTDecimalFromDouble(3.0)];
//    [yRange expandRangeByFactor:CPTDecimalFromDouble(3.0)];
//    plotSpace.globalXRange = [CPTPlotRange plotRangeWithLocation:CPTDecimalFromFloat(0.0) length:CPTDecimalFromFloat(1.5)];
//    plotSpace.globalYRange = [CPTPlotRange plotRangeWithLocation:CPTDecimalFromFloat(0.0) length:CPTDecimalFromFloat(1.7)];
    
    // Add legend
    graph.legend                 = [CPTLegend legendWithGraph:graph];
    graph.legend.numberOfRows    = 2;
    graph.legend.textStyle       = x.titleTextStyle;
    graph.legend.fill            = [CPTFill fillWithColor:[CPTColor darkGrayColor]];
    graph.legend.borderLineStyle = x.axisLineStyle;
    graph.legend.cornerRadius    = 5.0;
    graph.legend.swatchSize      = CGSizeMake(25.0, 25.0);
    graph.legendAnchor           = CPTRectAnchorBottom;
    graph.legendDisplacement     = CGPointMake(0.0, 12.0);
}

- (void) addPlots {
    mustOverride();
}

-(void)setPaddingDefaultsForGraph:(CGRect)bounds
{
    graph.paddingLeft = 0;
    graph.paddingRight = 0;
    graph.paddingTop = 0;
    graph.paddingBottom = 0;
    graph.plotAreaFrame.borderWidth = 0;
    graph.plotAreaFrame.cornerRadius = 0;
    graph.plotAreaFrame.borderLineStyle = nil;
    graph.plotAreaFrame.paddingLeft   = 55.0;
    graph.plotAreaFrame.paddingTop    = 12.0;
    graph.plotAreaFrame.paddingRight  = 7.0;
    graph.plotAreaFrame.paddingBottom = 40.0;
}

#pragma mark Plot Data Source Methods

-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot {
    mustOverride();
}

-(NSNumber *)numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)index {
    mustOverride();
}

#pragma mark -
#pragma mark Plot Space Delegate Methods

-(CPTPlotRange *)plotSpace:(CPTPlotSpace *)space willChangePlotRangeTo:(CPTPlotRange *)newRange forCoordinate:(CPTCoordinate)coordinate
{
    CPTXYAxisSet *axisSet = (CPTXYAxisSet *)space.graph.axisSet;
    
    CPTMutablePlotRange *changedRange = [newRange mutableCopy];
    
    switch ( coordinate ) {
        case CPTCoordinateX :
            [changedRange expandRangeByFactor:CPTDecimalFromDouble(1.025)];
            changedRange.location          = newRange.location;
            axisSet.xAxis.visibleAxisRange = changedRange;
            break;
            
        case CPTCoordinateY :
            [changedRange expandRangeByFactor:CPTDecimalFromDouble(1.05)];
            axisSet.yAxis.visibleAxisRange = changedRange;
            break;
            
        default :
            break;
    }
    
    return newRange;
}

#pragma mark -
#pragma mark CPTScatterPlot delegate method

-(void)scatterPlot:(CPTScatterPlot *)plot plotSymbolWasSelectedAtRecordIndex:(NSUInteger)index {
    mustOverride();
}

@end
