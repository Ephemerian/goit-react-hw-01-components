import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friend/FriendList/FriendList"
import { Transaction } from "./TransactionHistory/TransactionHistory";

import userInfo from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'


export const App = () => { 
  
  return (  
    <>      
      <Profile user={userInfo} />
      <Statistics data={data} />     
      <FriendList friends={friends} />           
      <Transaction items={transactions} />
    </>
      
  );
};
