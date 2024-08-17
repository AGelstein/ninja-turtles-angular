import { v4 as uuidv4 } from 'uuid';

export interface AuditLog {
    id: string;
    action: string;
    timestamp: Date;
}