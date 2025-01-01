// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientRecords {
    struct Patient {
        string name;
        uint age;
        string gender;
        string diagnosis;
        string residentialAddress; // Renamed to avoid using 'address'
        string phoneNumber;
        string email;
        string emergencyContact;
        string[] medicalHistory;
        string[] allergies;
        string[] currentMedications;
        VitalSigns vitalSigns;
        string physicalExamination;
        string[] diagnosticTests;
        string[] treatmentPlans;
        string[] progressNotes;
        string[] consentForms;
        string[] surgicalHistory;
        string socialHistory;
        string[] mentalHealthHistory;
        string reproductiveHealth;
        InsuranceInfo insuranceInfo;
        uint[] medicationAdherenceData;
    }

    struct VitalSigns {
        string height;
        string weight;
        string bloodPressure;
        string heartRate;
        string respiratoryRate;
        string temperature;
        uint[] bloodPressureData;
    }

    struct InsuranceInfo {
        string provider;
        string policyNumber;
        string groupNumber;
    }

    mapping(address => Patient) public patients;

    function addPatient(
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _diagnosis,
        string memory _residentialAddress,
        string memory _phoneNumber,
        string memory _email,
        string memory _emergencyContact,
        string[] memory _medicalHistory,
        string[] memory _allergies,
        string[] memory _currentMedications,
        VitalSigns memory _vitalSigns,
        string memory _physicalExamination,
        string[] memory _diagnosticTests,
        string[] memory _treatmentPlans,
        string[] memory _progressNotes,
        string[] memory _consentForms,
        string[] memory _surgicalHistory,
        string memory _socialHistory,
        string[] memory _mentalHealthHistory,
        string memory _reproductiveHealth,
        InsuranceInfo memory _insuranceInfo,
        uint[] memory _medicationAdherenceData
    ) public {
        patients[msg.sender] = Patient(
            _name,
            _age,
            _gender,
            _diagnosis,
            _residentialAddress,
            _phoneNumber,
            _email,
            _emergencyContact,
            _medicalHistory,
            _allergies,
            _currentMedications,
            _vitalSigns,
            _physicalExamination,
            _diagnosticTests,
            _treatmentPlans,
            _progressNotes,
            _consentForms,
            _surgicalHistory,
            _socialHistory,
            _mentalHealthHistory,
            _reproductiveHealth,
            _insuranceInfo,
            _medicationAdherenceData
        );
    }

    function getPatient(address _patientAddress)
        public
        view
        returns (
            string memory,
            uint,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string[] memory,
            string[] memory,
            string[] memory,
            VitalSigns memory,
            string memory,
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            string memory,
            string[] memory,
            string memory,
            InsuranceInfo memory,
            uint[] memory
        )
    {
        Patient memory p = patients[_patientAddress];
        return (
            p.name,
            p.age,
            p.gender,
            p.diagnosis,
            p.residentialAddress,
            p.phoneNumber,
            p.email,
            p.emergencyContact,
            p.medicalHistory,
            p.allergies,
            p.currentMedications,
            p.vitalSigns,
            p.physicalExamination,
            p.diagnosticTests,
            p.treatmentPlans,
            p.progressNotes,
            p.consentForms,
            p.surgicalHistory,
            p.socialHistory,
            p.mentalHealthHistory,
            p.reproductiveHealth,
            p.insuranceInfo,
            p.medicationAdherenceData
        );
    }
}
