export type TAccount = {
    id: number,
    name: string,
    type: string,
    amount: string,
}

export type TBudget = {
    id: number,
    name: string,
    totalAmount: string,
    currentAmount: string
}

export type TGoal = TBudget;

export type TTransaction = {
    id: number,
    name: string,
    account: string,
    amount: string,
    type: string,
    dateTime: Date
}

export type TUser = {
    uid: number;
    username: string;
    firstName: string;
    lastName: string;
    accounts: TAccount[];
    budgets: TBudget[];
    goals: TGoal[];
    transactions: TTransaction[];
}

export const user: TUser = {
    uid: 1,
    username: 'Sprak',
    firstName: 'Miguel',
    lastName: 'Arciaga',
    accounts: [
        {
            id: 1,
            name: 'G-Cash',
            type: 'E-Wallet',
            amount: '1500.00'
        }
    ],
    budgets: [
        {
            id: 1,
            name: 'Electricity',
            totalAmount: '15000.00',
            currentAmount: '10000.00'
        }
    ],
    goals: [
        {
            id: 1,
            name: 'Concert',
            totalAmount: '15000.00',
            currentAmount: '1000.00'
        }
    ],
    transactions: [
        {
            id: 1,
            name: 'Allowance',
            account: 'G-Cash',
            type: 'E-Wallet',
            amount: '1500.00',
            dateTime: new Date()
        }
    ]
}
export const users: TUser[] = [

    {
        uid: 1,
        username: 'Sprak',
        firstName: 'Miguel',
        lastName: 'Arciaga',
        accounts: [
            {
                id: 1,
                name: 'G-Cash',
                type: 'E-Wallet',
                amount: '1500.00'
            }
        ],
        budgets: [
            {
                id: 1,
                name: 'Electricity',
                totalAmount: '15000.00',
                currentAmount: '10000.00'
            }
        ],
        goals: [
            {
                id: 1,
                name: 'Concert',
                totalAmount: '15000.00',
                currentAmount: '1000.00'
            }
        ],
        transactions: [
            {
                id: 1,
                name: 'Allowance',
                account: 'G-Cash',
                type: 'E-Wallet',
                amount: '1500.00',
                dateTime: new Date()
            }
        ]
    }

]