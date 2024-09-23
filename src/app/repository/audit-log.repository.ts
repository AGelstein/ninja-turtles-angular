import { addEntities, selectAllEntities, selectEntitiesCount, withActiveId, withEntities } from "@ngneat/elf-entities";
import { AuditLog } from "../models/AuditLog";
import { createStore } from "@ngneat/elf";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
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
        id: uuidv4().toString(),
        action: message,
        timestamp: new Date()
        }
        store.update(addEntities(log))
    }

    logsExist$: Observable<boolean> = store.pipe(
        selectEntitiesCount(),
        map((count: number) => count > 0)
    )

    getAllAuditLogRows(): Observable<AuditLog[]> {
        return store.pipe(selectAllEntities())
    }
}