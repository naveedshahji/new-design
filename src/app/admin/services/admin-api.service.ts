import { UserImpersonate } from './models/impersonate';
import { Observable } from 'rxjs';
import { MonthlyLeaders } from './models/monthly-leaders';
import { ResetUsernameLockStatus } from './models/reset-user-lock-status';
import { UsernameLockStatus } from './models/username-lock';
import { UserCounts } from './models/user-counts';
import { UserUpline } from './models/user-upline';
import { RewardProjection } from './models/reward-projection';
import { RewardPoints } from './models/reward-points';
import { DailyRewardPoints } from './models/daily-reward-points';
import { UserAdminActivity } from './models/user-activity-log';
import { SaveAdRewardAmountResponse } from './models/save-ad-rewards-amount';
import { UserJoinedList } from './models/user-joined-list';
import { Injectable } from '@angular/core';
import { CoreModule } from '../../core.module';
import { HttpUtilService } from '../http-util.service';
import { MonthlyTotalsCommissionLastTwelveMonths } from './models/monthly-totals-commission-last-twelve-months';
import { TotalsReferralLevel } from './models/totals-referral-level';
import { FullTransactionDetails } from './models/full-transaction-details';
import { UserInfo } from './models/user-info';
import { DisableUser } from './models/disable-user';
import { EnableUser } from './models/enable-user';
import { AdminDailyReport } from './models/admin-daily-report';
import { MonthlyTransactionReport } from './models/monthly-transaction-report';
import { UserActivitySummary } from './models/user-activity-summary';
import { UserActivity } from './models/user-activity';
import { AdRewardMonthSettings } from './models/ad-reward-month-settings';
import { MonthlyRewardSummary } from './models/monthly-reward-summary';
import { BlackListDomains } from './models/blacklist-domains';
import { SaveBlackListDomain } from './models/save-black-domain';
import { ProjectedBalance } from './models/projected-balance';
import { CheckListQualifications } from './models/checklist-qualifications';
import { Promotions } from './models/promotions';
import { LoginLockStatus } from './models/login-lock-status';
import { ClearStatusLock } from './models/clear-status-lock';
import { ConnectedAccounts } from './models/connected-accounts';
import { PayoutDetails } from './models/payout-details';
import { UpcommingInvoice } from './models/upcomming-invoice';

@Injectable({
    providedIn: CoreModule
})
export class AdminApiService {

  constructor(private httpUtilService: HttpUtilService) { }

  getMonthlyTotalsCommissionLastTwelveMonths(user: any): Promise<MonthlyTotalsCommissionLastTwelveMonths>{
    return this.httpUtilService.getPromise(`/api/admin/commissions/${user}`);
  }

  getTotalsReferralLevel(user: string, year: string, month: string): Promise<TotalsReferralLevel>{
    return this.httpUtilService.getPromise(`/api/admin/commissions/${user}/${year}/${month}`);
  }

  getFullTransactionDetails(user: string, year: string, month: string): Promise<FullTransactionDetails>{
    return this.httpUtilService.getPromise(`/api/admin/commissions/${user}/${year}/${month}/full`);
  }

  getUserInfo(user: any): Promise<UserInfo>{
    return this.httpUtilService.getPromise(`/api/admin/userinfo/${user}`);
  }

  setImpersonation(params: any): Promise<UserImpersonate>{
    return this.httpUtilService.postPromise(`/sso/impersonate`, params);
  }

  disableUser(user: any): Promise<DisableUser>{
    return this.httpUtilService.getPromise(`/api/admin/disable-user?user_id=${user}`);
  }

  transferBalance(params: any, user: any): Promise<PayoutDetails>{
    return this.httpUtilService.postPromise(`/api/admin/payout/${user}`, params);
  }

  enableUser(user: any): Promise<EnableUser>{
    return this.httpUtilService.getPromise(`/api/admin/enable-user?user_id=${user}`);
  }

  getDailyReport(): Promise<AdminDailyReport>{
    return this.httpUtilService.getPromise(`/api/admin-report`);
  }

  getJoinedUsers(since: string, until: string, referral: number): Promise<UserJoinedList>{
    if(referral != null && referral != undefined){
      return this.httpUtilService.getPromise(`/api/admin/user-list?since=${since}&until=${until}&referrer=${referral}`);
    }
    return this.httpUtilService.getPromise(`/api/admin/user-list?since=${since}&until=${until}`);
  }

  getChecklist(username: string): Promise<CheckListQualifications>{
    return this.httpUtilService.getPromise(`/api/admin/checklist/${username}`);
  }

  getMonthlyTransactionReport(): Promise<MonthlyTransactionReport>{
    return this.httpUtilService.getPromise(`/api/admin/monthly-tx-summary`);
  }

  getUserActivitySummary(username: string): Promise<UserActivitySummary>{
    return this.httpUtilService.getPromise(`/api/admin/user-activity/${username}/summary`);
  }

  getUserUpline(username: string): Promise<UserUpline>{
    return this.httpUtilService.getPromise(`/api/admin/upline/${username}`);
  }

  getUserActivity(username: string, since: Date, until: Date): Promise<UserActivity> {
    let sinceString = `${since.getFullYear()}-${since.getMonth() + 1}-${since.getDate()}`;
    let untilString = `${until.getFullYear()}-${until.getMonth() + 1}-${until.getDate()}`;

    return this.httpUtilService.getPromise(
      `/api/admin/user-activity/${username}?since=${sinceString}&until=${untilString}`);
  }

  getAdRewardsAmount(month: string): Promise<AdRewardMonthSettings> {
    return this.httpUtilService.getPromise(
      `/api/admin/ad-rewards-amount?month=${month}`
    )
  }

  getLoginLockStatus(login_id: string): Promise<LoginLockStatus> {
    return this.httpUtilService.getPromise(`/api/admin/login-lock-status?login_id=${login_id}`);
  }

  getConnectedAccounts(login_id: string): Promise<ConnectedAccounts> {
    return this.httpUtilService.getPromise(`/api/admin/connected-accounts/${login_id}`);
  }

  unlockUser(params): Promise<ClearStatusLock>{
    return this.httpUtilService.postPromise(`/api/admin/login-lock-clear`, params);
  }

  saveAdRewardAmount(month: string, amount: number, type: string): Promise<SaveAdRewardAmountResponse>{
    return this.httpUtilService.getPromise(`/api/admin/save-ad-rewards-amount?month=${month}&amount=${amount}&type=${type}`);
  }

  getUserAdminActivity(offset: number, limit: number): Promise<UserAdminActivity>{
    return this.httpUtilService.getPromise(`/api/admin/admin-activity?offset=${offset}&limit=${limit}`);
  }

  getUsernameLockStatus(id: string): Promise<UsernameLockStatus> {
    return this.httpUtilService.getPromise(`/api/admin/pro/status/${id}`);
  }

  getUpcommingInvoice(id: string): Promise<UpcommingInvoice> {
    return this.httpUtilService.getPromise(`/api/admin/pro/history/${id}`);
  }

  applyDiscount(id: string, params): Promise<Promotions>{
    return this.httpUtilService.postPromise(`/api/admin/pro/apply-discount/${id}`, params);
  }

  resetUserNameLock(id: string): Promise<ResetUsernameLockStatus> {
    return this.httpUtilService.getPromise(`/api/admin/reset-username-lock?user_name=${id}`);
  }

  getDailyRewardPoints(from_date: string, to_date: string ,user: string, type: string): Promise<DailyRewardPoints>{
    if(type != null && type != undefined){
      return this.httpUtilService.getPromise(`/api/admin/reward-points/${user}/detail?from_date=${from_date}&to_date=${to_date}&type=${type}`);
    }
    return this.httpUtilService.getPromise(`/api/admin/reward-points/${user}/detail?from_date=${from_date}&to_date=${to_date}`);
  }

  getMonthlyRewardSummary(month: string, user: string): Promise<MonthlyRewardSummary>{
    return this.httpUtilService.getPromise(`/api/admin/reward-points/${user}?month=${month}`);
  }
  
  getMonthlyLeaderSummary(month: string): Promise<MonthlyLeaders>{
    return this.httpUtilService.getPromise(`/api/admin/reward-points/leaders?month=${month}`);
  }

  getTotalRewardPoints(month: string): Promise<ArrayBuffer>{    
    return this.httpUtilService.getArrayBufferPromise(`/api/admin/reward-points/list?month=${month}`);
  }

  getRewardProjection(): Promise<RewardProjection>{
    return this.httpUtilService.getPromise(`/api/admin/reward-points/projection`);
  }

  getBlockedDomains(limit: number, offset: number): Promise<BlackListDomains>{
    return this.httpUtilService.getPromise(`/api/admin/blacklist-domains?limit=${limit}&offset=${offset}`);
  }

  addBlockedDomain(domain: string): Promise<SaveBlackListDomain>{
    return this.httpUtilService.getPromise(`/api/admin/blacklist-domains/save?domain_name=${domain}`);
  }

  deleteBlockedDomain(domain: string): Promise<SaveBlackListDomain>{
    return this.httpUtilService.getPromise(`/api/admin/blacklist-domains/delete?domain_name=${domain}`);
  }

  getProjectedBalance(): Promise<ProjectedBalance>{
    return this.httpUtilService.getPromise(`/api/admin/projected-balances`);
  }

  getUserCounts(): Promise<UserCounts>{
    return this.httpUtilService.getPromise(`/api/admin/user-counts`);
  }

  getPromotionsList(): Promise<Promotions>{
    return this.httpUtilService.getPromise(`/api/admin/promotions/list`);
  }

  getUserPromotionsList(user): Promise<Promotions>{
    return this.httpUtilService.getPromise(`/api/admin/promotions/list/`+user);
  }

  assignPromotion(params): Promise<Promotions>{
    return this.httpUtilService.postPromise(`/api/admin/promotions/assign`, params);
  }

  addPromotion(params): Promise<Promotions>{
    return this.httpUtilService.postPromise<Promotions>(`/api/admin/promotions/add-campaign`, params);
  }

  endPromotion(params): Promise<Promotions>{
    return this.httpUtilService.postPromise<Promotions>(`/api/admin/promotions/end-campaign`, params);
  }

  status(): string {
      return "ok";
  }
}
