GLOBAL STORE:
</br>
```
    state: {
        user: {
            username: "",
        },
        candidates: [],
        companies: [],
        reports: [],
        wizardData: {
            selectedCandidate: Candidate, 
            selectedCompany: Company,
            dateAndTime: "",
            phase: "",
            passed: false,
            notes: ""
        }
    }
 ```

ENTITIES:
</br>
```
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
 ```
