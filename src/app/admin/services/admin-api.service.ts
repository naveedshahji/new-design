import { Observable } from 'rxjs';
// import { MonthlyLeaders } from './models/monthly-leaders';
// import { ResetUsernameLockStatus } from './models/reset-user-lock-status';
// import { UsernameLockStatus } from './models/username-lock';
// import { UserCounts } from './models/user-counts';
// import { UserUpline } from './models/user-upline';
// import { RewardProjection } from './models/reward-projection';
// import { RewardPoints } from './models/reward-points';
// import { DailyRewardPoints } from './models/daily-reward-points';
// import { UserAdminActivity } from './models/user-activity-log';
// import { SaveAdRewardAmountResponse } from './models/save-ad-rewards-amount';
// import { UserJoinedList } from './models/user-joined-list';
import { Injectable } from '@angular/core';
// import { CoreModule } from '../../core.module';
import { HttpUtilService } from '../../core/http-util.service';
// import { MonthlyTotalsCommissionLastTwelveMonths } from './models/monthly-totals-commission-last-twelve-months';
// import { TotalsReferralLevel } from './models/totals-referral-level';
// import { FullTransactionDetails } from './models/full-transaction-details';
// import { UserInfo } from './models/user-info';
// import { DisableUser } from './models/disable-user';
// import { EnableUser } from './models/enable-user';
// import { AdminDailyReport } from './models/admin-daily-report';
// import { MonthlyTransactionReport } from './models/monthly-transaction-report';
// import { UserActivitySummary } from './models/user-activity-summary';
// import { UserActivity } from './models/user-activity';
// import { AdRewardMonthSettings } from './models/ad-reward-month-settings';
// import { MonthlyRewardSummary } from './models/monthly-reward-summary';
// import { BlackListDomains } from './models/blacklist-domains';
// import { SaveBlackListDomain } from './models/save-black-domain';
// import { ProjectedBalance } from './models/projected-balance';
// import { CheckListQualifications } from './models/checklist-qualifications';
// import { Promotions } from './models/promotions';
// import { LoginLockStatus } from './models/login-lock-status';
// import { ClearStatusLock } from './models/clear-status-lock';
// import { ConnectedAccounts } from './models/connected-accounts';
// import { PayoutDetails } from './models/payout-details';
import { adminState } from '../store/admin.models';

@Injectable({
    providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpUtilService: HttpUtilService) { }

  getAllRoles(url: string): Promise<any>{
    return this.httpUtilService.getPromise<any>(url);
  }

  createRoles(url: string, params: any): Promise<any>{
    return this.httpUtilService.putPromise<any>(url, params);
  }
  
  // createRoles(url: string, params: any): Promise<any>{
  //   return this.httpUtilService.postPromise<any>(url, params);
  // }

  // some delete use post on backendhere :)
  deleteRole(url: string, params: any): Promise<any>{
    //return this.httpUtilService.deletePromise<any>(url, params);
    return this.httpUtilService.postPromise(url, params);
  }
  // getMonthlyTotalsCommissionLastTwelveMonths(user: any): Promise<MonthlyTotalsCommissionLastTwelveMonths>{
  //   return this.httpUtilService.getPromise(`/api/admin/commissions/${user}`);
  // }

  // getTotalsReferralLevel(user: string, year: string, month: string): Promise<TotalsReferralLevel>{
  //   return this.httpUtilService.getPromise(`/api/admin/commissions/${user}/${year}/${month}`);
  // }

  
  // disableUser(user: any): Promise<DisableUser>{
  //   return this.httpUtilService.getPromise(`/api/admin/disable-user?user_id=${user}`);
  // }

  // transferBalance(params: any, user: any): Promise<PayoutDetails>{
  //   return this.httpUtilService.postPromise(`/api/admin/payout/${user}`, params);
  // }

 
  status(): string {
      return "ok";
  }
}
