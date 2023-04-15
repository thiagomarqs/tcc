package br.mackenzie.tcc.dto;

public record SiteVerifyRequest(String secret, String response, String remoteip) {
}