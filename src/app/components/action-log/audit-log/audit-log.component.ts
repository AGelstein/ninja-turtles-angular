import { Component, inject } from '@angular/core';
import { AuditLogRepository } from '../../../repository/audit-log.repository';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AuditLog } from '../../../models/AuditLog';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.css'
})
export class AuditLogComponent {
  private readonly auditLogRepository = inject(AuditLogRepository)
  logsExist$: Observable<boolean> = this.auditLogRepository.logsExist$
  auditLog$: Observable<AuditLog[]> = this.auditLogRepository.selectAllAuditLogs()
  reversedAuditLog$: Observable<AuditLog[]> = this.auditLog$.pipe(
    filter((logs): logs is AuditLog[] => logs !== undefined),
    map((logs: AuditLog[]) => logs.slice().reverse())
  );
}

  // TODO Should have a limitation of how many rows we can show before a paging behavior occurs
