import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

def main():
    extract()

def extract():
    url = "https://experimento-turnstile.vercel.app"
    
    # Definindo que execute com o Google Chrome, em vez do Google Chrome for Testing
    options = Options()
    profile_path = "C:\\Users\\Samsung\\AppData\\Local\\Google\\Chrome\\User Data\\Default"
    options.add_argument("user-data-dir=" + profile_path)

    driver = webdriver.Chrome(options)
    next_button_xpath = "/html/body/div/div/div[2]/div/div/div[3]/button"
    driver.get(url)
    button = driver.find_element(By.XPATH, next_button_xpath)

    while button.is_enabled() == False:
        
        time.sleep(5)

        print("Botão ainda não está habilitado")
        
    button.click()

main()