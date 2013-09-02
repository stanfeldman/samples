//
//  PlotViewController.h
//  scatter_plot
//
//  Created by Стас on 05.05.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface PlotViewController : UIViewController<CPTPlotSpaceDelegate, CPTPlotDataSource, CPTScatterPlotDelegate> {
    CPTGraphHostingView* graphHostingView;
    CPTXYGraph *graph;
    CPTPlotSpaceAnnotation *symbolTextAnnotation;
}

-(void)generateData;
- (void) addPlots;
-(NSUInteger)numberOfRecordsForPlot:(CPTPlot *)plot;
-(NSNumber *)numberForPlot:(CPTPlot *)plot field:(NSUInteger)fieldEnum recordIndex:(NSUInteger)index;
-(void)scatterPlot:(CPTScatterPlot *)plot plotSymbolWasSelectedAtRecordIndex:(NSUInteger)index;

@end
