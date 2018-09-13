import math

#Print Euler's number to the specified decimal for cerner_2^5_2018

number_of_places = input("Enter number of decimal places")
print('Euler's number = {:.{}f}'.format(math.e, number_of_places))