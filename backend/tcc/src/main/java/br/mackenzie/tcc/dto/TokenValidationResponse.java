package br.mackenzie.tcc.dto;

public record TokenValidationResponse (boolean isValid, String[] errorCodes) {}