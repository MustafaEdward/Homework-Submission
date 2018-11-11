SELECT * FROM [Employees]

SELECT City FROM [Employees]

SELECT * FROM [Employees] WHERE city = 'Toronto'

SELECT * FROM [Employees] WHERE city = 'Mississauga'

SELECT EmployeeID  FROM [Employees]  WHERE city = 'Mississauga'
WHERE EmployeeID >=320 ORDER BY EmployeeID DESC LIMIT 3;

SELECT * FROM Employees
ORDER BY EmployeeID ASC

INSERT INTO [Employees](First_Name, Last_Name, City_of_residence)
VALUES('Mustafa', 'Alabdullah', 'Toronto')
