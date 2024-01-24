const recentTransactions = [
    {
        title: 'Gastos',
        category: 'Food',
        amount: '- P50',
        date: new Date().toLocaleDateString()
    },

    {
        title: 'Gastos',
        category: 'Food Ulit',
        amount: '- P120',
        date: new Date().toLocaleDateString()
    },

    {
        title: 'Bigay ni kuya',
        category: 'Allowance',
        amount: '+ P1000',
        date: new Date().toLocaleDateString()
    },
]

const transactions = {

    '1/23/2024' : [
        {
            title: 'Gastos',
            category: 'Food',
            amount: '- P50',
            date: new Date('1/23/2024').toLocaleDateString()
        },

        {
            title: 'Gastos',
            category: 'Food Ulit',
            amount: '- P120',
            date: new Date('1/23/2024').toLocaleDateString()
        },
    
        {
            title: 'Bigay ni kuya',
            category: 'Allowance',
            amount: '+ P1000',
            date: new Date('1/23/2024').toLocaleDateString()
        },
    ],

    '1/22/2024' : [
        {
            title: 'Gastos',
            category: 'Food',
            amount: '- P50',
            date: new Date('1/22/2024').toLocaleDateString()
        },

        {
            title: 'Gastos',
            category: 'Food Ulit',
            amount: '- P120',
            date: new Date('1/22/2024').toLocaleDateString()
        },
    
        {
            title: 'Bigay ni kuya',
            category: 'Allowance',
            amount: '+ P1000',
            date: new Date('1/22/2024').toLocaleDateString()
        },
    ],

    '1/20/2024' : [
        {
            title: 'Gastos',
            category: 'Food',
            amount: '- P50',
            date: new Date('1/20/2024').toLocaleDateString()
        },

        {
            title: 'Gastos',
            category: 'Food Ulit',
            amount: '- P120',
            date: new Date('1/20/2024').toLocaleDateString()
        },
    
        {
            title: 'Bigay ni kuya',
            category: 'Allowance',
            amount: '+ P1000',
            date: new Date('1/20/2024').toLocaleDateString()
        },
    ]

}

export { recentTransactions, transactions }

