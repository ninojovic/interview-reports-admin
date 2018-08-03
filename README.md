GLOBAL STORE:
    state: {
        user: {
            username: "",
        },
        candidates: [],
        companies: [],
        reports: [],
        wizard: {
            step1: {
                selectedCandidate: { Candidate },   
            },
            step2: {
                selectedCompany: { Company },
            },
            step3: {
                dateAndTime: "",
                phase: "",
                passed: false,
                notes: ""
            }
        }
    }

ENTITIES:
    Candidate: {
        id: number,
        avatar: string,
        name: string,
        birthday: string,
        email: string,
        education: string
    }

    Company: {
        id: number,
        name: string, 
        email: string
    }

    Report: {
        id: number,
        candidateId: number,
        candidateName: string,
        companyId: number,
        companyName: string,
        interviewDate: string,
        phase: string,
        status: string,
        note: string
    }
