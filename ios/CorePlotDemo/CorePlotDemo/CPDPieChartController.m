//
//  CPDFirstViewController.m
//  CorePlotDemo
//
//  Created by Стас on 17.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import "CPDPieChartController.h"

@interface CPDPieChartController ()

@end

@implementation CPDPieChartController

@synthesize hostView;

- (void)viewDidLoad
{
    [super viewDidLoad];
	[self initPlot];
}

- (BOOL) shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)toInterfaceOrientation{
    return YES;
}

- (void) initPlot{
    [self configureHost];
    [self configureGraph];
    [self configureChart];
    [self configureLegend];
}

-(void)configureHost {
    CGRect rect = self.view.bounds;
    self.hostView = [[CPTGraphHostingView alloc] initWithFrame:rect];
    [self.view addSubview:self.hostView];
}

-(void)configureGraph {
    CPTGraph* graph = [[CPTXYGraph alloc] initWithFrame:self.hostView.bounds];
    self.hostView.hostedGraph = graph;
    graph.paddingTop = 0.0f;
    graph.paddingRight = 0.0f;
    graph.paddingBottom = 0.0f;
    graph.paddingLeft = 0.0f;
    graph.axisSet = nil;
    CPTMutableTextStyle* textStyle = [CPTMutableTextStyle textStyle];
    textStyle.color = [CPTColor grayColor];
    textStyle.fontName = @"Helvetica-Bold";
    textStyle.fontSize = 16.0f;
    graph.title = @"portfolio prices";
    graph.titleTextStyle = textStyle;
    graph.titlePlotAreaFrameAnchor = CPTRectAnchorTop;
    graph.titleDisplacement = CGPointMake(0.0f, -12.0f);
    [graph applyTheme:[CPTTheme themeNamed:kCPTPlainWhiteTheme]];
}

-(void)configureChart {
    CPTGraph* graph = self.hostView.hostedGraph;
    CPTPieChart* chart = [[CPTPieChart alloc] init];
    chart.dataSource = self;
    chart.delegate = self;
    float bound = self.hostView.bounds.size.height;
    if(self.hostView.bounds.size.width < bound)
        bound = self.hostView.bounds.size.width;
    chart.pieRadius = (bound*0.7)/2;
    chart.identifier = graph.title;
    chart.startAngle = M_PI_4;
    chart.sliceDirection = CPTPieDirectionClockwise;
    CPTGradient* gradient = [[CPTGradient alloc] init];
    gradient.gradientType = CPTGradientTypeRadial;
    gradient = [gradient addColorStop:[[CPTColor blackColor] colorWithAlphaComponent:0.0f] atPosition:0.9f];
    gradient = [gradient addColorStop:[[CPTColor blackColor] colorWithAlphaComponent:0.4f] atPosition:1.0f];
    chart.overlayFill = [CPTFill fillWithGradient:gradient];
    [graph addPlot:chart];
}

-(void)configureLegend {
}

- (NSUInteger) numberOfRecordsForPlot:(CPTPlot *)plot{
    return [[CPDStockPriceStore sharedInstance] tickerSymbols].count;
}

- (NSNumber*) numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)idx{
    if(CPTPieChartFieldSliceWidth == fieldEnum){
        return [[CPDStockPriceStore sharedInstance].dailyPortfolioPrices objectAtIndex:idx];
    }
    else
        return 0;
}

- (CPTLayer*) dataLabelForPlot:(CPTPlot *)plot recordIndex:(NSUInteger)idx{
    return nil;
}
@end
