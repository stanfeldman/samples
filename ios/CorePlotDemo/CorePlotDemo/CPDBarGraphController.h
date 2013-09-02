//
//  CPDSecondViewController.h
//  CorePlotDemo
//
//  Created by Стас on 17.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CPDBarGraphController : UIViewController<CPTPlotDataSource, CPTBarPlotDelegate>

@property (nonatomic, strong) CPTGraphHostingView* hostView;

@end
