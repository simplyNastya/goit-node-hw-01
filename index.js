const {program} = require('commander')

const contactsServise = require('./contacts')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contactsServise.listContacts();
            return console.log(allContacts);
        
        case 'getById':
            const getContactById = await contactsServise.getContactById(id);
            return console.log(getContactById);
        
        case 'add':
            const newContact = await contactsServise.addContact({ name, email, phone })
            return console.log(newContact);
        
        case 'remove':
            const removeContact = await contactsServise.removeContact(id);
            return console.log(removeContact)
    }
}

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
invokeAction(argv)