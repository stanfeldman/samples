//
//  ChatViewController.m
//  SocketChat
//
//  Created by Стас on 02.09.13.
//  Copyright (c) 2013 Limehat. All rights reserved.
//

#import "ChatViewController.h"
#import "ChatClient.h"

@implementation ChatViewController {
    NSMutableArray* messages;
    ChatClient* client;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    client = [ChatClient sharedInstance];
    messages = [NSMutableArray new];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(onMessage:) name:@"Message" object:nil];
}

- (void) onMessage:(NSNotification *)notification{
    NSString* msg = [notification object];
    [messages addObject:msg];
    [self.tableView insertRowsAtIndexPaths:[NSArray arrayWithObject:[NSIndexPath indexPathForRow:messages.count-1 inSection:0]] withRowAnimation:UITableViewRowAnimationBottom];
}

- (IBAction)sendClicked:(UIButton *)sender {
    [self.textField resignFirstResponder];
    [self sendMessage];
}

- (IBAction)onEndEdit:(UITextField *)sender {
    [self sendMessage];
}

- (void) sendMessage {
    if(self.textField.text.length == 0)
        return;
    [client sendMessage:self.textField.text];
    self.textField.text = @"";
}

#pragma mark - Table view data source

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return messages.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    static NSString *CellIdentifier = @"MessageCell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    NSString* msg = [messages objectAtIndex:indexPath.row];
    cell.textLabel.text = msg;
    
    return cell;
}

- (void)viewDidUnload {
    [self setTableView:nil];
    [self setTextField:nil];
    [super viewDidUnload];
}

@end
