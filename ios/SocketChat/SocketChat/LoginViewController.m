//
//  ViewController.m
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "LoginViewController.h"
#import "ChatClient.h"

@implementation LoginViewController {
    ChatClient* client;
}

- (void)viewDidLoad {
    [super viewDidLoad];
	client = [ChatClient sharedInstance];
}

- (IBAction)loginClicked:(UIButton *)sender {
    [self.textField resignFirstResponder];
    [self doLogin];
}

- (IBAction)onEndEdit:(UITextField *)sender {
    [self doLogin];
}

- (void) doLogin {
    if(self.textField.text.length == 0)
        return;
    [client login:self.textField.text];
    [self performSegueWithIdentifier:@"ToChat" sender:self];
}

- (void)viewDidUnload {
    [self setTextField:nil];
    [super viewDidUnload];
}

@end
