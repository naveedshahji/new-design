import { createSelector } from '@ngrx/store';
import { State } from '../store/reducers';
export const getadmin = (state: State) => state.admin;

// export interface State {
//     messaging: MessagingState,
//     notifications: NotificationState,
//     account: AccountState,
//     referralRewards: ReferralRewardsState,
//     profile: ProfileState,
//     admin: adminState,
//     contacts: ContactsState,
//     userDataStore: UserDataStoreState,
//     settings: SettingsState,
//     discover: DiscoverState,
//     taxes: TaxesState
//   }
//   export const getadmin = (state: State) => state.admin;
const adminObj: any = {};
const previewUrlObject: any = {};

export const getAdminAllRoles = createSelector(getadmin,
    admin => admin);

