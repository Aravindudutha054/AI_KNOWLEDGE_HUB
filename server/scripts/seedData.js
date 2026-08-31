export const departments = [
    {
        name: "HR",
        code: "HR",
        description: "Human Resources Department"
    },
    {
        name: "IT",
        code: "IT",
        description: "Information Technology Department"
    },
    {
        name: "Finance",
        code: "FIN",
        description: "Finance Department"
    },
    {
        name: "Marketing",
        code: "MKT",
        description: "Marketing Department"
    },
    {
        name: "Operations",
        code: "OPS",
        description: "Operations Department"
    },
    {
        name: "Legal",
        code: "LEG",
        description: "Legal Department"
    },
    {
        name: "Compliance",
        code: "CMP",
        description: "Compliance Department"
    },
    {
        name: "Support",
        code: "SUP",
        description: "Customer Support Department"
    }
];

export const users = [

    // ==========================
    // SUPER ADMIN
    // ==========================

    {
        employeeId: "SUPER001",
        fullName: "Super Admin",
        email: "superadmin@enterpriseai.com",
        password: "Super@123",
        role: "super_admin",
        designation: "Super Administrator",
        department: null
    },

    // ==========================
    // HR
    // ==========================

    {
        employeeId: "HRADM001",
        fullName: "HR Admin",
        email: "hr.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "HR",
        designation: "HR Manager"
    },
    {
        employeeId: "HREMP001",
        fullName: "HR Employee",
        email: "hr.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "HR",
        designation: "HR Executive"
    },

    // ==========================
    // IT
    // ==========================

    {
        employeeId: "ITADM001",
        fullName: "IT Admin",
        email: "it.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "IT",
        designation: "IT Manager"
    },
    {
        employeeId: "ITEMP001",
        fullName: "IT Employee",
        email: "it.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "IT",
        designation: "Software Engineer"
    },

    // ==========================
    // FINANCE
    // ==========================

    {
        employeeId: "FINADM001",
        fullName: "Finance Admin",
        email: "finance.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "FIN",
        designation: "Finance Manager"
    },
    {
        employeeId: "FINEMP001",
        fullName: "Finance Employee",
        email: "finance.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "FIN",
        designation: "Accountant"
    },

    // ==========================
    // MARKETING
    // ==========================

    {
        employeeId: "MKTADM001",
        fullName: "Marketing Admin",
        email: "marketing.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "Marketing",
        designation: "Marketing Manager"
    },
    {
        employeeId: "MKTEMP001",
        fullName: "Marketing Employee",
        email: "marketing.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "Marketing",
        designation: "Marketing Executive"
    },

    // ==========================
    // OPERATIONS
    // ==========================

    {
        employeeId: "OPSADM001",
        fullName: "Operations Admin",
        email: "operations.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "Operations",
        designation: "Operations Manager"
    },
    {
        employeeId: "OPSEMP001",
        fullName: "Operations Employee",
        email: "operations.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "Operations",
        designation: "Operations Executive"
    },

    // ==========================
    // LEGAL
    // ==========================

    {
        employeeId: "LEGADM001",
        fullName: "Legal Admin",
        email: "legal.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "Legal",
        designation: "Legal Manager"
    },
    {
        employeeId: "LEGEMP001",
        fullName: "Legal Employee",
        email: "legal.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "Legal",
        designation: "Legal Advisor"
    },

    // ==========================
    // COMPLIANCE
    // ==========================

    {
        employeeId: "CMPADM001",
        fullName: "Compliance Admin",
        email: "compliance.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "Compliance",
        designation: "Compliance Manager"
    },
    {
        employeeId: "CMPEMP001",
        fullName: "Compliance Employee",
        email: "compliance.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "Compliance",
        designation: "Compliance Officer"
    },

    // ==========================
    // SUPPORT
    // ==========================

    {
        employeeId: "SUPADM001",
        fullName: "Support Admin",
        email: "support.admin@enterpriseai.com",
        password: "Admin@123",
        role: "admin",
        department: "Support",
        designation: "Support Manager"
    },
    {
        employeeId: "SUPEMP001",
        fullName: "Support Employee",
        email: "support.employee@enterpriseai.com",
        password: "Employee@123",
        role: "employee",
        department: "Support",
        designation: "Support Engineer"
    }
];