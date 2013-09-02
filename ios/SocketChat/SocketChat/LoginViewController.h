//
//  ViewController.h
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface LoginViewController : UIViewController

- (IBAction)loginClicked:(UIButton *)sender;
- (IBAction)onEndEdit:(UITextField *)sender;
@property (strong, nonatomic) IBOutlet UITextField *textField;

@end
