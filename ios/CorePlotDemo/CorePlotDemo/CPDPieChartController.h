//
//  CPDFirstViewController.h
//  CorePlotDemo
//
//  Created by Стас on 17.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CPDPieChartController : UIViewController<CPTPlotDataSource>

- (void) initPlot;
- (void) configureHost;
- (void) configureGraph;
- (void) configureChart;
- (void) configureLegend;

@property (nonatomic, strong) CPTGraphHostingView* hostView;

@end
