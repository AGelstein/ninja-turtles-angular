import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuditLog } from '../../models/AuditLog';
import { AuditLogSignalService } from '../../api/audit-log-signal.service';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.css'
})
export class AuditLogComponent {
  private readonly auditLogSignalService = inject(AuditLogSignalService);
  logsExist$: Observable<boolean> =this.auditLogSignalService.logsExist$();
  auditLog$: Observable<AuditLog[]> = this.auditLogSignalService.getAuditLogs();
  reversedAuditLog$: Observable<AuditLog[]> = this.auditLog$.pipe(
    map((logs: AuditLog[]) => logs.slice().reverse())
  );
}

  // TODO Should have a limitation of how many rows we can show before a paging behavior occurs
