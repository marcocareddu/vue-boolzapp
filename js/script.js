console.log('Vue OK', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'Boolzapp',

    data() {

        return {
            textToSearch: '',
            messageToSend: '',
            activeId: null,
            dropdownStatus: false,
            user: {
                name: 'Nome Utente',
                avatar: '_io'
            },
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            id: 1,
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id: 2,
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id: 3,
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },

    computed: {

        // return this.filteredContacts[this.activeId];
        activeContact() { return this.contacts.find(contact => contact.id === this.activeId); },

        // Display Last message id for current id
        lastMsgPosition() { return this.activeContact.messages.length - 1 },

        // Display current last message date
        lastMsgDate() {
            const position = this.activeContact.messages.length - 1
            return this.activeContact.messages[position].date;
        },

        // Generate filtered contacs
        filteredContacts() {
            const stringToSearch = this.textToSearch.toLowerCase();
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(stringToSearch));
        },
    },

    methods: {

        toggleDropdown() {
            this.dropdownStatus = !this.dropdownStatus;
        },


        // Generate url from data
        createPicUrl: (text) => `./img/avatar${text}.jpg`,

        // Change activeId by id
        changeActiveId(number) { this.activeId = number; },

        // Create new object and push
        createNewMsg(message, status) {
            const newMessage = {
                id: this.lastMsgPosition + 1,
                date: new Date().toLocaleString(),
                message,
                status
            };
            this.activeContact.messages.push(newMessage);
        },

        // Send new message with hardcoded id
        sendMessage() {
            this.createNewMsg(this.messageToSend, 'sent');
            this.messageToSend = '';

            // Receive a message after 1sec
            setTimeout(() => { this.createNewMsg('Ok!', 'received') }, 1000);
        },
    },

    // Set active id after create app
    created() { this.activeId = this.contacts[0].id }
});

// mount
app.mount('#root');