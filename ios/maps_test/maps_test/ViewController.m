//
//  ViewController.m
//  maps_test
//
//  Created by Стас on 03.03.13.
//  Copyright (c) 2013 Stanislav Feldman. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    NSURL *url = [[NSBundle mainBundle] URLForResource:@"index" withExtension:@"html"];
    NSString *html = [NSString stringWithContentsOfURL:url encoding:NSUTF8StringEncoding error:nil];
    NSString *path = [[NSBundle mainBundle] bundlePath];
    NSURL *baseURL = [NSURL fileURLWithPath:path];
    self.webView.delegate = self;
    [self.webView loadHTMLString:html baseURL:baseURL];
}

-(void)webViewDidFinishLoad:(UIWebView *)webView {
    [self.webView stringByEvaluatingJavaScriptFromString:@"say_hi();"];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)viewDidUnload {
    [self setWebView:nil];
    [super viewDidUnload];
}
@end
