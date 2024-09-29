import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AuditLog } from '../models/AuditLog';
import { AuditLogRepository } from '../repository/audit-log.repository';

@Injectable({
  providedIn: 'root'
})
export class AuditLogSignalService {
  private auditLogs = signal<AuditLog[]>([]);
  private logsExist = signal<boolean>(false);
  private auditLogRepository = inject(AuditLogRepository)

  constructor() {
    this.loadAuditLogs();
  }

  private loadAuditLogs() {
    this.auditLogRepository.selectAllAuditLogs().subscribe(logs => {
      this.auditLogs.set(logs);
      this.logsExist.set(logs.length > 0);
    });
  }

  getAuditLogs(): Observable<AuditLog[]> {
    return toObservable(this.auditLogs);
  }

  logsExist$(): Observable<boolean> {
    return toObservable(this.logsExist);
  }
}