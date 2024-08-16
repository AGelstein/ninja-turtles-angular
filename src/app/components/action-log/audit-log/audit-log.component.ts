import { Component, inject } from '@angular/core';
import { AuditLogRepository } from '../../../repository/audit-log.repository';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.css'
})
export class AuditLogComponent {
  private readonly auditLogRepository = inject(AuditLogRepository)

  $auditLog = this.auditLogRepository.getAllAuditLogRows()

}
