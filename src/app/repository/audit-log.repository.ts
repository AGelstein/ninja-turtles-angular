import { addEntities, selectAllEntities, withActiveId, withEntities } from "@ngneat/elf-entities";
import { AuditLog } from "../models/AuditLog";
import { createStore } from "@ngneat/elf";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

const store = createStore(
    { name: 'audit-log' },
    withEntities<AuditLog>(),
    withActiveId()
);

@Injectable({ providedIn: 'root' })
export class AuditLogRepository {
    constructor() {}

    log(message: string) {
        const log: AuditLog = {
        id: uuidv4().toString(), // Generates a unique ID
        message: message,
        timestamp: new Date()
        }
        store.update(addEntities(log))
    }


    getAllAuditLogRows(): Observable<AuditLog[]> {
        return store.pipe(selectAllEntities());
    }
}