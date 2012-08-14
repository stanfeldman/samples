import vkontakte

import gdata.data
import gdata.gauth
import gdata.contacts.client
import gdata.contacts.data

#Google
email = 'stanislavfeldman@gmail.com'
password = '!yaebu3#'

#VK
#URL for getting token http://oauth.vk.com/authorize?client_id=2859200&scope=friends&response_type=token
tokenVK = 'f819d441a8231870f85c66561bf82a9678ff800f80136ba8277865cb30215e3'

#If Ukraine, make it 1
ukraine = 0

def transform_phone(phone):
    if len(phone) < 5:
        return 0
    phone.replace('-', '')
    phone.replace('(', '')
    phone.replace(')', '')
    phone.replace(' ', '')
    if phone[1:].isdigit():
        if not ukraine:
            return phone
        else:
            if len(phone) == 7:
                return '+38044' + phone
            elif phone[0] == '+':
                return phone
            elif phone[0:3] == '380':
                return '+' + phone
            elif phone[0:2] == '80':
                return '+3' + phone
            elif phone[0] == '0':
                return '+38' + phone
            else:
                return 0
    else:
        return 0


def transform_birthday(date):
    if len(date) > 5:
        year = date[date.rfind('.') + 1:]
        month = date[date.find('.') + 1:date.rfind('.')]
        if len(month) == 1:
            month = '0' + month
        day = date[0:date.find('.')]
        if len(day) == 1:
            day = '0' + day
        gDate = year + '-' + month + '-' + day
    else:
        month = date[date.rfind('.') + 1:]
        if len(month) == 1:
            month = '0' + month
        day = date[0:date.find('.')]
        if len(day) == 1:
            day = '0' + day
        gDate = '--' + month + '-' + day

    return gDate


def downloadPhoto(url, file_name):
    from urllib2 import Request, urlopen

    #Create the request
    req = Request(url)

    # Open the url
    f = urlopen(req)

    # Open our local file for writing
    local_file = open(file_name, "wb")
    #Write to our local file
    local_file.write(f.read())
    local_file.close()


def removeLocalPhoto(file_name):
    from os import remove

    remove(file_name)


def create_contact(gd_client, record):

    new_contact = gdata.contacts.data.ContactEntry()

    # Set the contact's name.
    name = record['first_name'] + u' ' + record['last_name']
    new_contact = gdata.contacts.data.ContactEntry(name=gdata.data.Name(full_name=gdata.data.FullName(text=name)))

    # Set the contact's phone numbers.
    if record['mobile_phone'] != 0:
        new_contact.phone_number.append(gdata.data.PhoneNumber(text=record['mobile_phone'],
            rel=gdata.data.WORK_REL, primay='true'))
    if record['home_phone'] != 0:
        new_contact.phone_number.append(gdata.data.PhoneNumber(text=record['home_phone'],
            rel=gdata.data.HOME_REL))

    # Set birthday
    if 'bdate' in record:
        new_contact.birthday = gdata.contacts.data.Birthday(when=record['bdate'])

    # Send the contact data to the server.
    contact_entry = gd_client.CreateContact(new_contact)

    #Download photo from vk, add to google, remove from local computer
    local_image_filename = record['photo_big'][record['photo_big'].rfind('/') + 1:]
    downloadPhoto(record['photo_big'], local_image_filename)
    gd_client.ChangePhoto(local_image_filename, contact_entry, content_type='image/jpeg')
    removeLocalPhoto(local_image_filename)


if __name__ == '__main__':

    #Google authorization
    gd_client = gdata.contacts.client.ContactsClient(source='Export contacts to Google')
    gd_client.ClientLogin(email, password, gd_client.source)

    #VK authorization
    vk = vkontakte.API('2859200', 'Uq9YfuXTq8RUZbrGNnEP')
    vk = vkontakte.API(token=tokenVK)

    #Get list of VK friends
    friends = vk.friends.get(fields = "first_name, last_name, bdate, contacts, photo_big", order = 'name')

    iter = 1
    end = str(len(friends))
    #Add VK friends to Google
    for record in friends:

        print str(iter) + ' from ' + end
        iter += 1

        #VK answers only available fields
        if 'home_phone' in record:
            record['home_phone'] = transform_phone(record['home_phone'])
        else:
            record['home_phone'] = 0

        if 'mobile_phone' in record:
            record['mobile_phone'] = transform_phone(record['mobile_phone'])
        else:
            record['mobile_phone'] = 0

        if 'bdate' in record:
            record['bdate'] = transform_birthday(record['bdate'])

        #If contact has phone, we add it
        #Comment the line below, to add all vk friends to google contacts
        if record['home_phone'] or record['mobile_phone']:
            create_contact(gd_client, record)
