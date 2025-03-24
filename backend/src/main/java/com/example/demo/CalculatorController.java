package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*") // Permitir llamadas desde cualquier origen
public class CalculatorController {

    @GetMapping("/add")
    public Calculator add(
            @RequestParam(value = "num1") double num1,
            @RequestParam(value = "num2") double num2) {
        return new Calculator(num1 + num2);
    }

    @GetMapping("/sub")
    public Calculator sub(
            @RequestParam(value = "num1") double num1,
            @RequestParam(value = "num2") double num2) {
        return new Calculator(num1 - num2);
    }
}
