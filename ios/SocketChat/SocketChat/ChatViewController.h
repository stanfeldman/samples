//
//  ChatViewController.h
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ChatViewController : UIViewController<UITableViewDataSource, UITableViewDelegate>
@property (strong, nonatomic) IBOutlet UITableView *tableView;
@property (strong, nonatomic) IBOutlet UITextField *textField;
- (IBAction)sendClicked:(UIButton *)sender;
- (IBAction)onEndEdit:(UITextField *)sender;

@end
