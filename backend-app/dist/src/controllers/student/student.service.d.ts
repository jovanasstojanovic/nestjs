import { Student } from './model/student.entity';
import { Repository } from 'typeorm';
export declare class StudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    findByEmail(email: string): Promise<Student | null>;
}
