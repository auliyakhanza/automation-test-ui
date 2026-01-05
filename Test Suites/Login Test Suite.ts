<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>Login Test Suite</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>0</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>false</rerunImmediately>
   <testSuiteGuid>99f915a3-7c58-421d-8e9f-00d7c2735ad8</testSuiteGuid>
   <testCaseLink>
      <guid>836d7f63-a7f3-40fa-8668-d3789584d4e3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC-001 Login Success with Valid Credential</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>25855dde-1b6a-4f7b-ba0d-457c61f08d4d</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login Positive Data</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>25855dde-1b6a-4f7b-ba0d-457c61f08d4d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>342997c3-e009-4bac-9a0d-f67600ca9a96</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>25855dde-1b6a-4f7b-ba0d-457c61f08d4d</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>9b4fbfd8-b5b7-427d-8b1a-b2c700ba2b94</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>3899f9ad-ba3a-44d6-913b-e3f83fea275f</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC-002 Login with Visual User Credential</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>9a811093-a35d-4f32-a8c3-cbcd92fd5c01</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC-003 Login with Problem User Credential</testCaseId>
   </testCaseLink>
   <testCaseLink>
      <guid>ae746399-dc1a-4768-b710-4568e1f1b868</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Login/TC-004 Login Failed</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>d416bb11-b5d7-4175-b5bd-cb40e8bd7050</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Login Negative Data</testDataId>
      </testDataLink>
      <variableLink>
         <testDataLinkId>d416bb11-b5d7-4175-b5bd-cb40e8bd7050</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Username</value>
         <variableId>2b49cdb3-ac09-492d-b555-6895e5b32389</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>d416bb11-b5d7-4175-b5bd-cb40e8bd7050</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Password</value>
         <variableId>32c5a098-c9a8-426d-a8cd-c597c4bd00d4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>d416bb11-b5d7-4175-b5bd-cb40e8bd7050</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>Expected Error</value>
         <variableId>c5f61dac-957b-4af2-a373-9b379746a813</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
