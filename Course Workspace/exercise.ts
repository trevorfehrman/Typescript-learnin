let bankAccount: { money: number; deposit: (val: number) => void } = {
  money: 2000,
  deposit(value: number) {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: { deposit: (val: number) => void }; hobbies: string[] } = {
  name: 'Max',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
