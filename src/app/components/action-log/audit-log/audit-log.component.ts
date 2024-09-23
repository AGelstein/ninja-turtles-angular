import { Component, inject } from '@angular/core';
import { AuditLogRepository } from '../../../repository/audit-log.repository';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AuditLog } from '../../../models/AuditLog';

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
  $auditLog: Observable<AuditLog[]> = this.auditLogRepository.getAllAuditLogRows()
}
  // TODO the newest log should appear at the top of the list rather than the bottom
  // TODO Should have a limitation of how many rows we can show before a paging behavior occurs
  // TODO need title for "Audit Log" in component
