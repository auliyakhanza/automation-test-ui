import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://www.saucedemo.com')

WebUI.setText(findTestObject('Page_Swag Labs/Text Username'), 'visual_user')

WebUI.setText(findTestObject('Page_Swag Labs/Text Password'), 'secret_sauce')

WebUI.click(findTestObject('Page_Swag Labs/Login Button'))

WebUI.waitForElementPresent(findTestObject('Page_Swag Labs/Item Container'), 0)

int iconShopping = WebUI.getElementLeftPosition(findTestObject('Page_Swag Labs/Shopping Cart'))

int navBar = WebUI.getElementLeftPosition(findTestObject('Page_Swag Labs/Swag Labs Navbar'))

'Check if icon Shopping Cart already in the right place'
assert iconShopping > navBar

'Verify if Dog Image present, image product not match with given title'
WebUI.verifyElementPresent(findTestObject('Page_Swag Labs/Dog Image'), 0)

WebUI.closeBrowser()

